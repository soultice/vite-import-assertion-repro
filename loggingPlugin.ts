export const loggingPlugin = {
  name: 'logging-plugin',
  enforce: 'pre',
  resolveId(source, importer, options) {
    console.log('source', source, 'importer', importer, 'options', options)
  },
  load(id, options) {
    console.log('loading', id, options)
    return null
  },
}
