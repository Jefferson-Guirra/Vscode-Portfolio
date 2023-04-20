import { SetCookie } from '../cookies/insert-cookie'
import { UpdateFilers } from '../cookies/update-filers-open-cookie'
import { UpdateFile } from '../cookies/update-file-open'
import { UpdateFolders } from '../cookies/update-folders-open-cookie'

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
