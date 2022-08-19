/*
 * @Author: Chengbotao
 * @Date: 2022-11-23 10:52:06
 */
import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom';

export type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
};
export const Transition: React.FC<TransitionProps> = (props) => {
  const { children, animation, wrapper, classNames, ...restProps } = props;
  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {wrapper ? <div>{children as ReactNode}</div> : children}
    </CSSTransition>
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};

export default Transition;
