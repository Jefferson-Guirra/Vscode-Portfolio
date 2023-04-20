import {
  UpdateFolders,
  UpdateFile,
  UpdateFilers,
  SetCookie,
} from './handle-cookie-protocols'

interface HandleCookie {
  insertCookie: SetCookie
  updateFile: UpdateFile
  updateFilers: UpdateFilers
  updateFolders: UpdateFolders
}

export const handleCookie = (): HandleCookie => {
  const insertCookie = new SetCookie()
  const updateFile = new UpdateFile(insertCookie)
  const updateFilers = new UpdateFilers(insertCookie)
  const updateFolders = new UpdateFolders(insertCookie)
  return {
    insertCookie,
    updateFile,
    updateFilers,
    updateFolders,
  }
}
