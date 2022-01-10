module.exports = ({ root, jscodeshift }) => {
  const findImportSpecifier = imported =>
    root
      .find(jscodeshift.ImportDeclaration, {
        source: {
          type: jscodeshift.StringLiteral.name,
          value: 'react-query',
        },
      })
      .find(jscodeshift.ImportSpecifier, {
        imported: {
          type: jscodeshift.Identifier.name,
          name: imported,
        },
      })

  const findNamespacedImportSpecifiers = () =>
    root
      .find(jscodeshift.ImportDeclaration, {
        source: {
          type: jscodeshift.StringLiteral.name,
          value: 'react-query',
        },
      })
      .find(jscodeshift.ImportNamespaceSpecifier)

  return {
    findImportSpecifier,
    findNamespacedImportSpecifiers,
  }
}
