import danta from 'danta'

danta.set_theme('techie_one_page')

export async function request(path, data) {
  const {...global} = data
  const template = 'index'
  const page_data = {}

  if(!page_data) {
    return {content: `${path} not found`, status: 404}
  }

  return {content: danta.render(template, {global, ...page_data})}
}

export async function build(data) {
  const {...global} = data
  const template = 'index'
  const page_data = {}

  await danta.build('index.html', template, {global, ...page_data})
}
