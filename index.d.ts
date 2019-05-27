
import * as L from 'leaflet';

declare module 'leaflet' {
  namespace TileLayer {
    class WMTS extends TileLayer {
      wmtsParams: any;
      options: any;
      constructor(baseUrl: string, options: any);
      setParams(params: any, noRedraw?: boolean): this;
    }
  }

  namespace tileLayer {
    function wmts(baseUrl: string, options?: any): TileLayer.WMTS;
  }
}
