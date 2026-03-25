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

  const markerLayerRef = useRef<leaflet.LayerGroup | null>(null);

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
    if (map && city) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      if (markerLayerRef.current) {
        map.removeLayer(markerLayerRef.current);
      }
      const markerLayer = leaflet.layerGroup();
      points.forEach((point) => {
        if (point.latitude && point.longitude) {
          leaflet
            .marker({
              lat: point.latitude,
              lng: point.longitude,
            }, {
              icon: point.id === selectedPointId ? currentCustomIcon : defaultCustomIcon,
            })
            .addTo(markerLayer);
        }
      });
      markerLayer.addTo(map);
      markerLayerRef.current = markerLayer;
    }
  }, [map, points, selectedPointId, defaultCustomIcon, currentCustomIcon]);

  return (
    <div
      style={{ height: '100%' }}
      ref={mapRef}
    >
    </div>
  );
}
