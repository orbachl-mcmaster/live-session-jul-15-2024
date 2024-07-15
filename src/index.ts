function hello() {
    return 'Hello'
}

console.log(hello())

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest
    it('says hello', () => {
        expect(hello()).toBe('Hello')
    })
  }