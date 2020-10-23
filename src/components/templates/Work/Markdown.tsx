import React from 'react';
import { INode, IProps } from 'types/index';
import Image from '../../features/Image/Image';

/* All components used in markdown files and styled in Work.scss */
export const Row = ({ children }: INode, { bg }: IProps) => {
  return <div className={`Work__row ${bg ? 'Work__row--bg' : ''}`}>{children}</div>;
};

export const Col = ({ children }: INode, { bg }: IProps) => {
  return <div className={`Work__col ${bg ? 'Work__col--bg' : ''}`}>{children}</div>;
};

export const Desc = ({ children }: INode) => {
  return <div className="Work__desc">{children}</div>;
};

export const Img = ({ src, alt }: IProps) => {
  return (
    <div className="Work__img">
      <Image src={src} alt={alt} />
    </div>
  );
};
