import { Card, CardContent, Stack } from '@mui/material'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet'
import Counties from '../leaflet/CountyGrants';



function MyMap() {
  return (
    <main>
      <Stack>
        <Card raised={false}>
          <CardContent>
            <MapContainer
              center={[37.1, -95.7]}
              zoom={4}
              style={{ height: 390, width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
              />
              <LayersControl
                collapsed={true}
                position='topright'
                sortLayers={false}
              >
                <LayersControl.Overlay checked name='Counties'>
                  <LayerGroup
                  //  key={countyKey}
                  >
                    <Counties />
                  </LayerGroup>
                </LayersControl.Overlay>

              </LayersControl>
            </MapContainer>
          </CardContent>
        </Card>
      </Stack>
    </main>
  )
}

export default MyMap