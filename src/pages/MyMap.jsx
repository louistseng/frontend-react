import React from 'react';
import {
  TileLayer, Marker, Popup, MapContainer,
} from 'react-leaflet';

export default function MyMap() {
  const Taoyuan = [24.9554, 121.23];
  const Pingzhen = [24.9296, 121.2054];
  const Zhongli = [24.9722, 121.2054];

  return (
    <div>
      <h2 className="mb-4">門市搜尋</h2>
      <hr />
      <MapContainer
        style={{
          height: '500px',
          width: '80%',
          marginBottom: '30px',
          margin: '0 auto',
          backgroundColor: '#eee',
          boxSizing: 'initial',
        }}
        center={Taoyuan}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={Taoyuan}>
          <Popup>
            <div style={{ width: '300px' }}>
              <h3>桃園門市</h3>
              <img src="/img/Taoyuan.jpeg" alt="" />
              <p className="h6">
                電話: 04-2345677
                <br />
                地址: 桃園市700號
              </p>
            </div>
          </Popup>
        </Marker>
        <Marker position={Pingzhen}>
          <Popup>
            <div style={{ width: '300px' }}>
              <h3>平鎮門市</h3>
              <img src="/img/Pingzhen.jpeg" alt="" />
              <p className="h6">
                電話: 04-3425467
                <br />
                地址: 桃園市平鎮區200號
              </p>
            </div>
          </Popup>
        </Marker>
        <Marker position={Zhongli}>
          <Popup>
            <div style={{ width: '300px' }}>
              <h3>中壢門市</h3>
              <img src="/img/Zhongli.jpeg" alt="" />
              <p className="h6">
                電話: 04-0985647
                <br />
                地址: 桃園市中壢區500號
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
