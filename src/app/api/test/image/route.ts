import { imageUpload } from "@/lib/r2"

export const GET = async () => {
    return await imageUpload(
        "https://gptnl-images.s3.amazonaws.com/f9601e2f-99fc-424e-9412-efa991102152.png"
    )
}