import { DataCenter } from './datacenter';

const _initializeDataCenter = () => {
  let _dataCenterInstance: Promise<DataCenter>;

  return () => {
    if (!_dataCenterInstance) {
      _dataCenterInstance = DataCenter.init();
      _dataCenterInstance.then(dc => {
        try {
          if (window) {
            (window as any).dc = dc;
          }
        } catch (_) {
          // ignore
        }

        return dc;
      });
    }

    return _dataCenterInstance;
  };
};

export const getDataCenter = _initializeDataCenter();

export type { DataCenter };
export * from './message';
export { AffineProvider } from './provider/affine';
export * from './provider/affine/apis';
export * from './types';
export { WorkspaceUnit } from './workspace-unit';
