import { SetCookie } from '../cookies/insert-cookie'
import { UpdateFilers } from '../cookies/update-filers-open-cookie'
import { UpdateFile } from '../cookies/update-file-open'

interface HandleCookie {
  insertCookie: SetCookie
  updateFile: UpdateFile
  updateFilers: UpdateFilers
}

export const handleCookie = (): HandleCookie => {
  const insertCookie = new SetCookie()
  const updateFile = new UpdateFile(insertCookie)
  const updateFilers = new UpdateFilers(insertCookie)
  return {
    insertCookie,
    updateFile,
    updateFilers,
  }
}
