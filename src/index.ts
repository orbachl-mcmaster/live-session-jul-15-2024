function hello (): string {
  return 'Hello'
}

console.log(hello())

if (import.meta?.vitest !== undefined) {
  const { it, expect } = import.meta.vitest
  it('says hello', () => {
    expect(hello()).toBe('Hello')
  })
}
