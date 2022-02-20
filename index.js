import danta from 'danta'

danta.set_theme('danta-techie-one-page')

// creates a link with a https://devicon.dev/ icon
export const devicon_link = (
  class_name,
  url,
  text,
  colored = 'colored',
  target = 'external'
) => `
  <a href="${url}" class="devicon_link devicon" target="${target}">
    <i class="${class_name} ${colored}"></i>
    <span>${text}</span>
  </a>
`

export async function request(path, data) {
  const {base_url, ...rest} = data

  return {content: danta.render('index', {global: {base_url}, ...rest})}
}

export async function build(data) {
  const {base_url, ...rest} = data

  await danta.build('index.html', 'index', {global: {base_url}, ...rest})
}
