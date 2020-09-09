import React from 'react';

// import { Link } from 'gatsby';
import Table from 'react-bootstrap/Table';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Map from '../components/Map';
import sample from '../assets/shorter_address.json';
console.log(Object.keys(sample.features[0].properties));
const IndexPage = () => (
  <Layout>
    <>
      <div id="bg" />
      <div id="overlay" />
      <div id="main">
        <Header />
        <div
          id="mapContainer"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
          }}
        >
          <Map />
          <Table
            hover
            responsive
            style={{
              zIndex: 1,
              minWidth: '60%',
              maxWidth: '60%',
              width: '60%',
              height: '60%',
            }}
          >
            <thead>
              <tr>
                {Object.keys(sample.features[0].properties).map(function(item, key) {
                  return <th key={key}>{item}</th>;
                })}
                <th>lat</th>
                <th>long</th>
              </tr>
            </thead>
            <tbody>
              {sample.features.map(function(item, key) {
                return (
                  <tr key={key}>
                    {Object.values(item.properties).map(function(address, key) {
                      return <td key={key}>{address}</td>;
                    })}
                    {
                      item.geometry.coordinates[1]&&
                      <>
                        <td key="lat">{item.geometry.coordinates[1]}</td>
                        <td key="long">{item.geometry.coordinates[0]}</td>
                      </>
                    }
                    
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Footer />
      </div>
    </>
  </Layout>
);

export default IndexPage;
