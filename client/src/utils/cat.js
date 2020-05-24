export function getCatCoverStyle(cat) {
  if (cat.cover) {
    return {
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `linear-gradient(to top, rgba(191, 97, 106, 0.4), rgba(191, 97, 106, 0.0)), url(${cat.cover})`,
    }
  } else {
    return {
      background: '#BF616A',
    }
  }
}
