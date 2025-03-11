"use client";

import { useEffect } from "react";
import { H } from "@highlight-run/next/client";

interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number;
}

export default function TrackUserDevice() {
  useEffect(() => {
    H.init("ldwy0ylg", {
      environment: "production",
      version: "0.4.1",
    });

    const getDeviceType = () => {
      const userAgent = navigator.userAgent;
      if (/mobile/i.test(userAgent)) return "Mobile";
      if (/tablet/i.test(userAgent)) return "Tablet";
      return "Desktop";
    };

    const getBrowserName = () => {
      if (navigator.userAgent.indexOf("Firefox") !== -1) return "Firefox";
      if (navigator.userAgent.indexOf("Chrome") !== -1) return "Chrome";
      if (navigator.userAgent.indexOf("Safari") !== -1) return "Safari";
      if (navigator.userAgent.indexOf("Edge") !== -1) return "Edge";
      if (navigator.userAgent.indexOf("Brave") !== -1) return "Brave";
      return "Unknown";
    };

    // Fetch IP and Location
    fetch("https://ipinfo.io/json?token=1e98cd92ea4c5a")
      .then((res) => res.json())
      .then((data) => {
        const { ip, city, region, country, timezone } = data;
        const deviceInfo = {
          ip,
          location: `${city}, ${region}, ${country}`,
          timezone,
          browser: getBrowserName(),
          deviceMemory:
            (navigator as NavigatorWithMemory).deviceMemory || "Unknown",
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          deviceType: getDeviceType(),
          browserLanguage: navigator.language,
          hardwareConcurrency: navigator.hardwareConcurrency,
        };

        // Send data to Highlight.io
        H.identify(ip, deviceInfo);
      });
  }, []);

  return null;
}
