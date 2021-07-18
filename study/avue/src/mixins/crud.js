// import { mapGetters } from 'vuex'
import request from '@/utils/request'

// export const curdMixin = {
export default {
  data() {
    return {
      data: [],
      option: {},
      form: {},
      params: {},
      loading: false,
      page: {
        pageNumber: 1, //页码
        pageSize: 10, //页数
        // total
      },
      config: {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE',
        // rowKey:'id'
        pageNumber:'currentPage',
        pageSize:'pageSize'
      },
    }
  },
  computed: {
    // ...mapGetters(['user']),
    bindVal() {
      return {
        ref: 'crud',
        data: this.data,
        option: this.option,
        tableLoading: this.loading,
      }
    },
    onEvent() {
      return {
        'on-load': this.getList,
        'row-save': this.rowSave,
        'row-update': this.rowUpdate,
        'row-del': this.rowDel,
        'refresh-change': this.refreshChange,
        'search-reset': this.searchChange,
        'search-change': this.searchChange,
      }
    },
    rowKey() {
      return this.config.rowKey || 'id'
    },
  },
  methods: {
    // get
    getList() {
      const callback = () => {
        this.loading = true
        const pageParams = {}
        pageParams['currentPage'] = this.page.currentPage
        pageParams['pageSize'] = this.page.pageSize

        const data = Object.assign(pageParams, this.params)
        this.data = []
        request({
          url: this.config['list'],
          method: this.config.GET,
          params: data,
        }).then(res => {
          this.loading = false
          const data = res.data
          this.data = data.list
          this.page.total = data.total
          if (this.listAfter) this.listAfter(data)
        })
      }
      if (this.listBefore) this.listBefore()
      callback()
    },
    // add
    rowSave(row, done, loading) {
      const callback = () => {
        delete this.form.params
        request({
          url: this.config['save'],
          method: this.config.POST,
          data: this.form,
        })
          .then(data => {
            this.getList()
            if (this.addAfter) this.addAfter(data)
            else this.$message.success('新增成功')
            done()
          })
          .catch(() => {
            loading()
          })
      }
      if (this.addBefore) this.addBefore()
      callback()
    },
    // update
    rowUpdate(row, index, done, loading) {
      const callback = () => {
        delete this.form.params
        request({
          url: this.config['update'],
          method: this.config.PUT,
          data: this.form,
        })
          .then(data => {
            this.getList()
            if (this.updateAfter) this.updateAfter(data)
            else this.$message.success('更新成功')
            done()
          })
          .catch(() => loading())
      }
      if (this.updateBefore) this.updateBefore()
      callback()
    },
    // remove
    rowDel(row, index) {
      const rowkey = {}
      rowkey[this.rowKey] = row[this.rowKey]
      const callback = () => {
        request({
          url: this.config['delete'],
          method: this.config.DELETE,
          data: rowkey,
        }).then(data => {
          this.getList()
          if (this.delAfter) this.delAfter(data, row, index)
          else this.$message.success('删除成功')
        })
      }
      if (this.delBefore) {
        this.delBefore()
        callback()
      } else {
        this.$confirm(`此操作将永久删除序号【${index}】的数据, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => callback())
      }
    },
    searchChange(params, done) {
      if (done) done()
      this.params = params
      this.page.currentPage = 1
      this.getList()
    },
    refreshChange() {
      this.getList()
    },
  },
}
