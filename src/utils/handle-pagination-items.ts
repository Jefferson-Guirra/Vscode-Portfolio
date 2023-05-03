import { Pagination } from './@types/pagination-items'

const validateItems = (
  index: number,
  page: number,
  numberItemsPerPage: number
): boolean => {
  if (
    index >= page * numberItemsPerPage - 8 &&
    index < page * numberItemsPerPage
  ) {
    return true
  }
  return false
}

export class GetProjectData implements Pagination {
  constructor(
    private readonly data: any[],
    private readonly numberItemsPerPage: number
  ) {}

  pagination(page: number) {
    return this.data.filter((item, index) =>
      validateItems(index, page, this.numberItemsPerPage)
    )
  }

  length() {
    return this.data.length
  }
}
