sed -i 's/"name": "tams-ui",/"name": "@tams-ui\/nightly",/' packages/tams-ui/package.json
sed -i '2s/tams-ui/@tams-ui\/nightly/' internal/build-constants/src/pkg.ts