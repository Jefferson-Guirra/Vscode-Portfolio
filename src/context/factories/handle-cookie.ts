import {
  UpdateFolders,
  UpdateFile,
  UpdateFilers,
  SetCookie,
  UpdateVscodeMinimize,
} from './handle-cookie-protocols'

interface HandleCookie {
  insertCookie: SetCookie
  updateFile: UpdateFile
  updateFilers: UpdateFilers
  updateFolders: UpdateFolders
  vscodeMinimize: UpdateVscodeMinimize
}

export const handleCookie = (): HandleCookie => {
  const insertCookie = new SetCookie()
  const updateFile = new UpdateFile(insertCookie)
  const updateFilers = new UpdateFilers(insertCookie)
  const updateFolders = new UpdateFolders(insertCookie)
  const vscodeMinimize = new UpdateVscodeMinimize(insertCookie)
  return {
    insertCookie,
    updateFile,
    updateFilers,
    updateFolders,
    vscodeMinimize,
  }
}
