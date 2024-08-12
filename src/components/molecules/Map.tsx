/*Since the map was loaded on client side,
we need to make this component client rendered as well*/
"use client";

//Map component Component from library
import { GoogleMap } from "@react-google-maps/api";

interface MapComponentProps {
  defaultMapZoom: number;
  defaultMapOptions: {
    zoomControl: boolean;
    tilt: number;
    gestureHandling: string;
    mapTypeId: string;
  };
  defaultMapCenter: {
    lat: number;
    lng: number;
  };
  className?: string;
}

const MapComponent = ({
  defaultMapZoom,
  defaultMapOptions,
  defaultMapCenter,
  className,
}: MapComponentProps) => {
  return (
    <div className='w-full rounded-md p-4'>
      <GoogleMap
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        mapContainerClassName={className}
      ></GoogleMap>
    </div>
  );
};

export { MapComponent };
