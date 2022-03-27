import * as React from 'react'
import '../styles/components/App.scss'

import { RedocStandalone } from 'redoc'
import { ChangeEvent, useState } from 'react'

type ApiVersion = {
  id: string,
  name: string,
  specUrl: string
}

const apiVersions: ApiVersion[] = [
  {
    id: '2',
    name: 'API v2',
    specUrl: 'https://raw.githubusercontent.com/everyday-as/gmodstore-api-docs/master/openapi/api-v2.yaml'
  },
  {
    id: '3',
    name: 'API v3 (UNRELEASED)',
    specUrl: 'https://staging.gmodstore.com/openapi'
  }
]

function App () {
  const [specUrl, setSpecUrl] = useState(apiVersions[0].specUrl)

  const changeApiVersion = (e: ChangeEvent<HTMLSelectElement>) => {
    const apiVersion = apiVersions.find(x => x.id === e.target.value)
    if (!apiVersion) {
      return
    }

    setSpecUrl(apiVersion.specUrl)
  }

  return (
    <div className="App">
      <header className={'header'}>
        <div className={'header__container'}>
          <div className={'header__container__input-group'}>
            <label htmlFor="versionSelector">
              API version
            </label>
            <select id={'versionSelector'} onChange={(e) => changeApiVersion(e)}>
              {apiVersions.map(version => <option value={version.id} key={version.id}>{version.name}</option>)}
            </select>
          </div>
        </div>
      </header>
      <RedocStandalone specUrl={specUrl}/>
    </div>
  )
}

export default App
