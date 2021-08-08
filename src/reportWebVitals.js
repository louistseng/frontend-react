const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(WebVitals => {
      WebVitals.getCLS(onPerfEntry);
      WebVitals.getFID(onPerfEntry);
      WebVitals.getFCP(onPerfEntry);
      WebVitals.getLCP(onPerfEntry);
      WebVitals.getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
