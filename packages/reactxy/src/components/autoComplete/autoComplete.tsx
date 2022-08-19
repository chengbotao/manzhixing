/*
 * @Author: Chengbotao
 * @Date: 2022-11-23 16:08:19
 */
import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import classNames from 'classnames';
import Input, { InputProps } from '../input/input';
import Icon from '../icon/icon';
import Transition from '../transition/transition';
import useDebounce from '../../hooks/useDebounce';
import useClickOutside from '../../hooks/useClickOutside';

interface DataSourceObject {
  value: string;
}
export type DataSourceType<T = Record<string, unknown>> = T & DataSourceObject;

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions?: (keyword: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { fetchSuggestions, onSelect, renderOption, value, className, ...restProps } = props;
  const classes = classNames('xy-auto-complete', className);

  const [inputValue, setInputValue] = useState(value as string);
  const [suggestions, setSuggestions] = useState<DataSourceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const triggerSearch = useRef(false);
  const componentRef = useRef<HTMLDivElement>(null);

  const debounceValue = useDebounce<string>(inputValue);
  useClickOutside(componentRef, (event: MouseEvent) => {
    setSuggestions([]);
  });

  useEffect(() => {
    if (debounceValue && triggerSearch.current) {
      setSuggestions([]);
      const results = fetchSuggestions && fetchSuggestions(debounceValue);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
          if (data.length > 0) {
            setShowDropdown(true);
          }
        });
      } else {
        setSuggestions(results!);
        setShowDropdown(true);
        if (results!.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
    }
    setHighlightIndex(-1);
  }, [debounceValue]);

  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };
  const handleSelect = (item: DataSourceType) => {
    setInputValue(item.value);
    setShowDropdown(false);
    // setSuggestions([]);
    onSelect && onSelect(item);
    triggerSearch.current = false;
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    switch (e.code) {
      case 'Enter':
        suggestions[highlightIndex] && handleSelect(suggestions[highlightIndex]);
        break;
      case 'Escape':
        setShowDropdown(false);
        // setSuggestions([]);
        break;
      case 'PageUp':
        highlight(highlightIndex - 1);
        break;
      case 'PageDown':
        highlight(highlightIndex + 1);
        break;
      default:
        break;
    }
  };

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value;
  };
  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown || loading}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {
          setSuggestions([]);
        }}
      >
        <ul className="xy-suggestion-list">
          {loading && (
            <div className="xy-suggestions-loading-icon">
              <Icon icon="spinner" spin />
            </div>
          )}
          {suggestions.map((item, index) => {
            const suggestionClasses = classNames('xy-suggestion-item', {
              'is-active': index === highlightIndex,
            });
            return (
              <li
                key={`${item.value}-${index}`}
                className={suggestionClasses}
                onClick={() => handleSelect(item)}
              >
                {renderTemplate(item)}
              </li>
            );
          })}
        </ul>
      </Transition>
    );
  };

  return (
    <div className={classes} ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      ></Input>
      {generateDropdown()}
    </div>
  );
};
