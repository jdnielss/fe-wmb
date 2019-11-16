export const handleKeypress = (e)=> {
    const characterCode = e.key
    if (characterCode === 'Backspace') return
    const characterNumber = Number(characterCode)
    if (characterNumber >= 0 && characterNumber <= 9) {
        if (e.currentTarget.value && e.currentTarget.value.length) {
            return
        } else if (characterNumber === 0) {
            e.preventDefault()
        }
    } else {
        e.preventDefault()
    }
}