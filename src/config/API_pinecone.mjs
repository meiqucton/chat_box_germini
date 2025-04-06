import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
    apiKey: 'pcsk_5mHP3A_87UmiZbDuKtXSW7MaMS1eEhVqtpofw6i3NF1A3sq9kfbWj38k9hhwjDp1ngASPZ'
});
 
const checkpc = async () => {
    try{
        const indexName = 'chatbox-ai';
        const checkPC = await pc.createIndexForModel({
            name: indexName,
            cloud: 'aws',
            region: 'us-east-1',
            embed: {
              model: 'llama-text-embed-v2',
              fieldMap: { text: 'chunk_text' },
            },
            waitUntilReady: true,
          });
          if(checkPC.status === 'ready') {
            console.log("Index đã tồn tại");

          }
            else {
                console.log("Index đã được tạo thành công");
            }
    } catch (error) {
        console.error("Loi sql Models:", error);
    }
}
export {pc}