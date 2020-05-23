export function getCatCoverStyle(cat) {
  if (cat.cover) {
    return {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  } else {
    return {
      background: '#BF616A',
    }
  }
}
