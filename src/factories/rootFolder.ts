import { FolderComposite } from '@/utils/folder-composite'
import { CreateFolder } from '@/utils/create-folder'
import { FolderInterface } from '@/@types/folder'

const makeFolder = (
  folderName: string,
  files: Array<string | FolderInterface>,
  folderFather: FolderInterface
): FolderInterface => {
  const folderElement = new CreateFolder(folderName)
  folderFather.add(folderElement)
  for (const file of files) {
    folderElement.add(file)
  }
  return folderElement
}

export const makeRootFolder = (): FolderComposite => {
  //ROOT FILES
  const portfolio = new CreateFolder('portfolio')
  const rootFolder = new FolderComposite()
  rootFolder.add(portfolio)

  //CHILDREN OF ROOT  FOLDER FILES
  const src = new CreateFolder('src')
  const pages = new CreateFolder('pages')
  portfolio.add(src)
  src.add(pages)
  src.add('package.json')
  makeFolder('presentation', ['Presentation.tsx'], pages)
  makeFolder('skills', ['Skills.tsx'], pages)
  makeFolder('projects', ['Projects.tsx'], pages)
  makeFolder('contact', ['Contact.tsx'], pages)

  return rootFolder
}
