/*
 * @Author: Chengbotao
 * @Date: 2023-01-09 14:01:30
 */
import React, {
  Children,
  cloneElement,
  FC,
  FunctionComponentElement,
  useContext,
  useState,
} from 'react';
import classNames from 'classnames';
import { menuContext } from './menu';
import Icon from '../icon/icon';
import Transition from '../transition/transition';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: string;
  title: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const SubMenu: FC<SubMenuProps> = (props) => {
  const { index, title, children, className } = props;

  const context = useContext(menuContext);
  const openSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpened = index && context.mode === 'vertical' ? openSubMenus.includes(index) : false;
  const [menuOpen, setOpen] = useState(isOpened);
  const classes = classNames('xy-submenu', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  });

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };
  const handleMouse = (e: MouseEvent, toggle: boolean) => {
    setOpen(toggle);
  };

  const clickEvent =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvent =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classNames('xy-submenu-items', {
      'menu-open': menuOpen,
    });
    const childrenComponent = Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;

      if (displayName === 'MenuItem') {
        return cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.warn('Warning: SubMenu has a child which is not a MenuItem component!');
      }
    });
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-bottom" classNames="zoom-in-left">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };
  return (
    <li key={index} className={classes} {...hoverEvent}>
      <div className="xy-submenu-title" {...clickEvent}>
        {title}
        <Icon icon="angle-down" className="arrow-icon"></Icon>
      </div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
