const createMarker = (data) => {
  const markers = data.map((item) => {
    return {
      id: item.id,
      point: item.point,
      status: item.status,
      title: item.title,
    };
  });
  return markers ? markers : [];
};

export { createMarker };
