export default function first(req, res) {
    res.clearPreviewData()
    res.end('Preview mode disabled')
}