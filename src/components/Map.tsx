import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '../hooks/useMap';
import { OffersResult } from '../types/offers';

type MapProps = {
  city: OffersResult['city'];
  points: {
    id: string;
    latitude: number;
    longitude: number;
  }[];
  selectedPointId?: string;
};

export default function Map({ city, points, selectedPointId }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'public/img/pin.svg',
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'public/img/pin-active.svg',
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);
      points.forEach((point) => {
        if (point.latitude && point.longitude) {
          leaflet
            .marker({
              lat: point.latitude,
              lng: point.longitude,
            }, {
              icon: point.id === selectedPointId ? currentCustomIcon : defaultCustomIcon,
            })
            .addTo(map);
        }
      });
      return () => {
        markerLayer.remove();
      };
    }
  }, [currentCustomIcon, defaultCustomIcon, map, points, selectedPointId]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}
