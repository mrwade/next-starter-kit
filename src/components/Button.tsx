'use client';

import React, { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'> & {
  onClick?: () => Promise<void> | void;
};

const Button: React.FC<Props> = ({ onClick, ...props }) => {
  return (
    <button
      {...props}
      onClick={async () => {
        if (onClick) await onClick();
      }}
    />
  );
};

export default Button;
