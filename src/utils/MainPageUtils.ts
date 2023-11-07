import { Pages } from 'src/components/Router/Router';

const getRidOfDetailsInPath = (path: string): string => {
  return path.slice(0, path.indexOf(Pages.DETAILS) - 1) || '/';
};

export { getRidOfDetailsInPath };
