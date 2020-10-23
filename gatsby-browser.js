import CustomLayout from './src/utils/wrapPageElement';
export const wrapPageElement = CustomLayout;

export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
};
