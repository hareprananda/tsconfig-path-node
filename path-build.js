const tsconfig = require("./tsconfig.json")
const tsConfigPaths = require("tsconfig-paths")

const {baseUrl, outDir, paths} = tsconfig.compilerOptions
tsConfigPaths.register({
    baseUrl: `${outDir}/${baseUrl}`,
    paths: paths || {}
})