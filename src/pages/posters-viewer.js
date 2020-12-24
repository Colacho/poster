import React, {useState, useEffect} from "react";
import Layout from "../components/layout";
import { Cloudinary } from 'cloudinary-core';
import { Image } from 'cloudinary-react';

const cloudinaryCore = new Cloudinary({ cloud_name: 'dlttjlit3', secure: true });

const IndexPage = () => {
  const [assets, setAssets] = useState(null);
  const [error, setError] = useState(null);

  const getImages = () => {
    fetch(cloudinaryCore.url('poster', { format: 'json', type: 'list', context: true }))
      .then((response) => response.json())
      .then((data) => {
        setError(false);
        console.log('DATA', data.resources);
        setAssets(data.resources || []);
      })
      .catch((err) => {
        setError('couldnt find images');
        // setViewerUrl('');
      });
  };

  useEffect(() => {
    if(!assets){
      getImages();
    }
  }, [assets]);

  return (
    <Layout>
      <div className="bg-yellow-100">
        { error && <pre>{error}</pre> }
        { assets && (
          <div className="container mx-auto grid grid-cols-4 gap-4 p-4">
            {assets.map((i) => {
              return (
                <div key={i.public_id}>
                  <Image
                    width="400"
                    height="auto"
                    cloudName="dlttjlit3"
                    publicId={i.public_id}
                    secure="true"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default IndexPage;