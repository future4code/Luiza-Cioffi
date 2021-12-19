export const goToLogin = (history) => {
    history.push("/login")
}

export const goToRegister = (history) => {
    history.push("/cadastro")
}

export const goToFeed = (history) => {
    history.push("/")
}

export const goToPost = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToCreatePost = (history) => {
    history.push('/newpost')
}