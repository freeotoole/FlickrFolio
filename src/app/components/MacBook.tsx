'use client'

import React, { useState } from 'react'

interface MacBookProps {
  screenShot?: string
  url?: string
}

export default function MacBook({
  url = 'flickr-folio.vercel.app',
  screenShot = '/images/flickr-folio.png',
}: MacBookProps) {
  const [isDark, setIsDark] = useState(false)
  return (
    <div>
      <style jsx>{`
        .device {
          --chrome-bg: #f0f0f0;
          --chrome-mid: #cdcdcd;
          --chrome-dark: #a6a6a6;
          --url-text: black;
          --url-bg: white;
          position: relative;
          background: white;
          width: 78%;
          left: 11%;
          margin-top: 6%;
          margin-bottom: 12%;
        }
        .device.device-dark {
          --chrome-bg: #373737;
          --chrome-mid: #666;
          --chrome-dark: #a6a6a6;
          --url-text: white;
          --url-bg: #666;
        }
        .device:before {
          content: '';
          display: block;
          background: black;
          box-shadow: 0 0 0 0.25rem rgba(175, 175, 175, 0.8);
          border-radius: 0.7em;
          position: absolute;
          top: -8%;
          left: -4%;
          right: -4%;
          bottom: -10%;
          z-index: 0;
        }
        .device .site-thumbnail {
          cursor: ns-resize;
          height: 0;
          overflow-y: scroll;
          padding-top: 52%;
          position: relative;
          scrollbar-width: thin;
        }
        .device .site-thumbnail::-webkit-scrollbar {
          width: 8px;
        }
        .device .site-thumbnail::-webkit-scrollbar-track {
          background-color: var(--chrome-bg);
        }
        .device .site-thumbnail::-webkit-scrollbar-thumb {
          background-color: var(--chrome-mid);
          box-shadow: inset 0 0 0 1px var(--chrome-bg);
        }
        .device .site-thumbnail::-webkit-scrollbar-thumb:hover {
          background-color: var(--chrome-dark);
        }
        .device .site-thumbnail > img {
          position: absolute;
          top: 0;
        }
        .device .device-chrome {
          background: var(--chrome-bg);
          display: flex;
          align-items: center;
          width: 100%;
          position: relative;
          padding: 0.75% 0;
        }
        .device .device-chrome .ctrl {
          position: relative;
          display: flex;
          width: 7%;
          margin: 0 1%;
        }
        .device .device-chrome .ctrl i {
          display: block;
          height: 0;
          width: 25%;
          padding-top: 25%;
          border-radius: 50%;
          background-color: var(--chrome-dark);
          position: relative;
          left: 36%;
        }
        .device .device-chrome .ctrl i:before,
        .device .device-chrome .ctrl i:after {
          content: '';
          height: 0;
          width: 100%;
          padding-top: 100%;
          display: block;
          border-radius: 50%;
          background-color: inherit;
          position: absolute;
          top: 0;
        }
        .device .device-chrome .ctrl i:before {
          left: -125%;
        }
        .device .device-chrome .ctrl i:after {
          right: -125%;
        }
        .device .device-chrome .url-bar {
          width: 100%;
        }
        .device .device-chrome .url-bar text {
          fill: var(--url-text);
        }
        .device .device-chrome .url-bar rect {
          fill: var(--url-bg);
        }
        .device .device-chrome .burger {
          width: 3%;
          position: relative;
          margin: 0 1%;
          display: block;
          cursor: pointer;
        }
        .device .device-chrome .burger > svg {
          position: absolute;
          bottom: 0%;
          transform: translateY(50%);
          fill: var(--chrome-dark);
        }

        .mb-chassis {
          height: 7%;
          position: absolute;
          bottom: -15.5%;
          left: -16%;
          right: -16%;
          border-radius: 0 0 6% 6%/0 0 50% 50%;
          overflow: hidden;
          background: linear-gradient(
            to right,
            #828486 0%,
            #f3f3f3 1%,
            #828486 3%,
            #f3f3f3 9%,
            #f3f3f3 91%,
            #828486 97%,
            #f3f3f3 99%,
            #828486 100%
          );
        }
        .mb-chassis:before {
          content: '';
          display: block;
          height: 40%;
          border-radius: 0 0 2vh 2vh;
          position: absolute;
          width: 14%;
          top: 0;
          left: 43%;
          z-index: 1;
          box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.35);
        }
        .mb-chassis:after {
          content: '';
          display: block;
          box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.5);
          height: 40%;
          background: #a4a8a9;
          border-top: 1px solid rgba(0, 0, 0, 0.2);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
      `}</style>

      {/* :className="['device', isDark ? 'device-dark' : '']" */}
      <figure className={`device ${isDark ? 'device-dark' : ''}`}>
        <figcaption className="device-chrome">
          <span className="ctrl">
            <i />
          </span>
          <svg className="url-bar" viewBox="0 0 100 3.6">
            <rect x="0" y="0" width="100%" height="100%" rx=".5" />
            <text x="1.2" y="2.5" fontSize="2" textRendering="optimizeSpeed">
              {url}
            </text>
          </svg>
          <span className="burger" onClick={() => setIsDark(!isDark)}>
            <svg viewBox="0 0 100 80">
              <rect x="0" y="10" width="100%" height="20%" rx="5" />
              <rect x="0" y="45%" width="100%" height="20%" rx="5" />
              <rect x="0" y="80%" width="100%" height="20%" rx="5" />
            </svg>
          </span>
        </figcaption>
        <div className="site-thumbnail">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={screenShot} alt={`screenshot of ${url}`} />
        </div>
        <div className="mb-chassis" />
      </figure>
    </div>
  )
}

/*
<template>
  
</template>

<script>
export default {
  name: 'CssMacbook',
  props: {
    screenShot: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      default: () => (''),
    },
  },
  data: () => ({
    isDark: false,

  }),
};
</script>

<style scoped>
.device {
  --chrome-bg: #f0f0f0;
  --chrome-mid: #cdcdcd;
  --chrome-dark: #a6a6a6;
  --url-text: black;
  --url-bg: white;
  position: relative;
  background: white;
  width: 78%;
  left: 11%;
  margin-top: 6%;
  margin-bottom: 12%;
}
.device.device-dark {
  --chrome-bg: #373737;
  --chrome-mid: #666;
  --chrome-dark: #a6a6a6;
  --url-text: white;
  --url-bg: #666;
}
.device:before {
  content: "";
  display: block;
  background: black;
  box-shadow: 0 0 0 0.25rem rgba(175, 175, 175, 0.8);
  border-radius: 0.7em;
  position: absolute;
  top: -8%;
  left: -4%;
  right: -4%;
  bottom: -10%;
  z-index: 0;
}
.device .site-thumbnail {
  cursor: ns-resize;
  height: 0;
  overflow-y: scroll;
  padding-top: 52%;
  position: relative;
  scrollbar-width: thin;
}
.device .site-thumbnail::-webkit-scrollbar {
  width: 8px;
}
.device .site-thumbnail::-webkit-scrollbar-track {
  background-color: var(--chrome-bg);
}
.device .site-thumbnail::-webkit-scrollbar-thumb {
  background-color: var(--chrome-mid);
  box-shadow: inset 0 0 0 1px var(--chrome-bg);
}
.device .site-thumbnail::-webkit-scrollbar-thumb:hover {
  background-color: var(--chrome-dark);
}
.device .site-thumbnail > img {
  position: absolute;
  top: 0;
}
.device .device-chrome {
  background: var(--chrome-bg);
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 0.75% 0;
}
.device .device-chrome .ctrl {
  position: relative;
  display: flex;
  width: 7%;
  margin: 0 1%;
}
.device .device-chrome .ctrl i {
  display: block;
  height: 0;
  width: 25%;
  padding-top: 25%;
  border-radius: 50%;
  background-color: var(--chrome-dark);
  position: relative;
  left: 36%;
}
.device .device-chrome .ctrl i:before, .device .device-chrome .ctrl i:after {
  content: "";
  height: 0;
  width: 100%;
  padding-top: 100%;
  display: block;
  border-radius: 50%;
  background-color: inherit;
  position: absolute;
  top: 0;
}
.device .device-chrome .ctrl i:before {
  left: -125%;
}
.device .device-chrome .ctrl i:after {
  right: -125%;
}
.device .device-chrome .url-bar {
  width: 100%;
}
.device .device-chrome .url-bar text {
  fill: var(--url-text);
}
.device .device-chrome .url-bar rect {
  fill: var(--url-bg);
}
.device .device-chrome .burger {
  width: 3%;
  position: relative;
  margin: 0 1%;
  display: block;
  cursor: pointer;
}
.device .device-chrome .burger > svg {
  position: absolute;
  bottom: 0%;
  transform: translateY(50%);
  fill: var(--chrome-dark);
}

.mb-chassis {
  height: 7%;
  position: absolute;
  bottom: -15.5%;
  left: -16%;
  right: -16%;
  border-radius: 0 0 6% 6%/0 0 50% 50%;
  overflow: hidden;
  background: linear-gradient(to right, #828486 0%, #f3f3f3 1%, #828486 3%, #f3f3f3 9%, #f3f3f3 91%, #828486 97%, #f3f3f3 99%, #828486 100%);
}
.mb-chassis:before {
  content: "";
  display: block;
  height: 40%;
  border-radius: 0 0 2vh 2vh;
  position: absolute;
  width: 14%;
  top: 0;
  left: 43%;
  z-index: 1;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.35);
}
.mb-chassis:after {
  content: "";
  display: block;
  box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.5);
  height: 40%;
  background: #a4a8a9;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
*/
