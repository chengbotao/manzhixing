/*
 * @Author: Chengbotao
 * @Date: 2022-10-17 00:09:40
 */
import React, {
  FC,
  createContext,
  useState,
  Children,
  cloneElement,
  FunctionComponentElement,
} from 'react';
import classNames from 'classnames';
import { SubMenuProps } from './subMenu';
import { MenuItemProps } from './menuItem';

type MenuMode = 'horizontal' | 'vertical';
type MenuSelectCallback = (selectedIndex: string) => void;

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: MenuSelectCallback;
  children?: React.ReactNode;
  defaultOpenSubMenus?: string[];
}

interface MenuContext {
  defaultOpenSubMenus?: string[];
  index: string;
  onSelect?: MenuSelectCallback;
  mode?: MenuMode;
}
export const menuContext = createContext<MenuContext>({ index: '0' });

const Menu: FC<MenuProps> = (props) => {
  const { className, defaultIndex, style, mode, children, defaultOpenSubMenus, onSelect } = props;

  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const classes = classNames('xy-menu', className, {
    'xy-menu-vertical': mode === 'vertical',
    'xy-menu-horizontal': mode != 'vertical',
  });

  const handleClick = (index: string) => {
    setCurrentActive(index);
    onSelect && onSelect(index);
  };

  const passedContext: MenuContext = {
    mode,
    defaultOpenSubMenus,
    index: currentActive ?? '0',
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return Children.map(children, (child, index) => {
      const childElement = child as
        | FunctionComponentElement<MenuItemProps>
        | FunctionComponentElement<SubMenuProps>;

      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.warn('Warning: Menu has a child which is not a MenuItem component!');
      }
    });
  };
  return (
    <ul className={classes} style={style}>
      <menuContext.Provider value={passedContext}>{renderChildren()}</menuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'vertical',
  defaultOpenSubMenus: [],
};

export default Menu;
