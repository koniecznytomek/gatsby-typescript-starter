import React from 'react';
import Layout from '../components/layout/layout';
import 'styles/animations.scss';
import 'styles/global.scss';

interface IProps {
  element: any;
  props: any;
}

const CustomLayout = ({ element, props }: IProps) => {
  return <Layout {...props}>{element}</Layout>;
};

export default CustomLayout;
