function MyComponent({ prop1 }) {
  return (
    // base case
    {prop1 !== 0 &&
      // recursive call
      return n * factorial(n - 1);
    }
  )
}