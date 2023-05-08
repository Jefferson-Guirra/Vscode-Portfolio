import {
  UpdateFolders,
  UpdateFile,
  UpdateFilers,
  SetCookie,
  UpdateVscodeMinimize,
  UpdateVscodeOpen,
} from './handle-cookie-protocols'

interface HandleCookie {
  insertCookie: SetCookie
  updateFile: UpdateFile
  updateFilers: UpdateFilers
  updateFolders: UpdateFolders
  vscodeMinimize: UpdateVscodeMinimize
  updateVscodeOpen: UpdateVscodeOpen
}

export const handleCookie = (): HandleCookie => {
  const insertCookie = new SetCookie()
  const updateFile = new UpdateFile(insertCookie)
  const updateFilers = new UpdateFilers(insertCookie)
  const updateFolders = new UpdateFolders(insertCookie)
  const vscodeMinimize = new UpdateVscodeMinimize(insertCookie)
  const updateVscodeOpen = new UpdateVscodeOpen(insertCookie)
  return {
    insertCookie,
    updateFile,
    updateFilers,
    updateFolders,
    vscodeMinimize,
    updateVscodeOpen,
  }
}
