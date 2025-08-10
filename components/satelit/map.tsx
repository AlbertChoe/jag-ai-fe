'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  onMapClick: (lat: number, lng: number) => void;
}

export default function MapComponent({ onMapClick }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    // avoid re-init
    if (!mapRef.current || mapInstanceRef.current) return;

    // init map
    const map = L.map(mapRef.current, {
      center: [-8.1689, 113.7006],
      zoom: 15,
      zoomControl: true,
    });

    // base layers
    const satelliteLayer = L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          '&copy; <a href="https://www.esri.com/">Esri</a> — Sources: Esri, USGS, USDA, IGN, GeoEye, etc.',
        maxZoom: 19,
      },
    );

    const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    });

    satelliteLayer.addTo(map);
    L.control.layers({ Satellite: satelliteLayer, OpenStreetMap: osmLayer }).addTo(map);

    // sample polygons
    const field1 = L.polygon(
      [
        [-8.1685, 113.7],
        [-8.1685, 113.701],
        [-8.1695, 113.701],
        [-8.1695, 113.7],
      ],
      { color: 'green', fillColor: 'lightgreen', fillOpacity: 0.3, weight: 2 },
    ).addTo(map);

    const field2 = L.polygon(
      [
        [-8.1675, 113.7015],
        [-8.1675, 113.7025],
        [-8.1685, 113.7025],
        [-8.1685, 113.7015],
      ],
      { color: 'orange', fillColor: 'yellow', fillOpacity: 0.3, weight: 2 },
    ).addTo(map);

    const field3 = L.polygon(
      [
        [-8.17, 113.699],
        [-8.17, 113.7005],
        [-8.171, 113.7005],
        [-8.171, 113.699],
      ],
      { color: 'darkgreen', fillColor: 'green', fillOpacity: 0.3, weight: 2 },
    ).addTo(map);

    // typed click handlers
    const handleFieldClick = (e: L.LeafletMouseEvent) => {
      onMapClick(e.latlng.lat, e.latlng.lng);
    };
    field1.on('click', handleFieldClick);
    field2.on('click', handleFieldClick);
    field3.on('click', handleFieldClick);

    const handleMapClick = (e: L.LeafletMouseEvent) => {
      onMapClick(e.latlng.lat, e.latlng.lng);
    };
    map.on('click', handleMapClick);

    mapInstanceRef.current = map;

    // cleanup
    return () => {
      map.off('click', handleMapClick);
      field1.off('click', handleFieldClick);
      field2.off('click', handleFieldClick);
      field3.off('click', handleFieldClick);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [onMapClick]);

  // IMPORTANT: parent/container must give this a height, e.g., h-96 or flex-grow
  return <div ref={mapRef} className="w-full h-full" />;
}
