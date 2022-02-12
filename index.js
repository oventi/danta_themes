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
  const {...global} = data
  const template = 'index'
  const page_data = {}

  await danta.build('index.html', template, {global, ...page_data})
}
