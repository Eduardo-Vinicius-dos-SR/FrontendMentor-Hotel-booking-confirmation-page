type ShareOrDownloadResult =
    | { status: "shared" }
    | { status: "downloaded" }
    | { status: "unsupported" }

export async function shareOrDownloadFile(file: File, downloadName: string): Promise<ShareOrDownloadResult> {
    const canUseShareApi =
        typeof navigator !== "undefined" &&
        "canShare" in navigator &&
        navigator.canShare?.({ files: [file] })

    if (canUseShareApi) {
        try {
            await navigator.share({ files: [file], title: downloadName })
            return { status: "shared" }
        } catch (error) {
            if (error instanceof Error && error.name === "AbortError") {
                return { status: "shared" }
            }
        }
    }

    const supportsDownload =
        typeof document !== "undefined" &&
        "download" in document.createElement("a") &&
        typeof window.Blob !== "undefined" &&
        typeof URL.createObjectURL === "function"

    if (!supportsDownload) {
        return { status: "unsupported" }
    }

    const url = URL.createObjectURL(file)
    const link = document.createElement("a")
    link.href = url
    link.download = downloadName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)

    return { status: "downloaded" }
}