function deepget(obj, path, defaultValue) {
  const props = path.split ? path.split('.') : path;
  let lastReference = obj;

  for (var i = 0, len = props.length; i < len; i++) {
    if (lastReference[ props[ i ] ] !== undefined) {
      lastReference = lastReference[props[i]];
    } else {
      return defaultValue || null;
    }
  }

  return lastReference;
}

export default deepget
