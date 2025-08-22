# PowerShell script to extract text from PDF
# This is a simple approach that may not work for all PDFs

param(
    [string]$PdfPath = "C:\Documents\GitHubCode\Holy_Cross\Science\Intro to sci and lab safety study guide- CP.pdf"
)

try {
    # Try using Select-String to extract readable text patterns
    Write-Host "Attempting to extract text from PDF..."
    
    # Read the PDF as bytes and look for text patterns
    $content = Get-Content $PdfPath -Raw -Encoding UTF8
    
    # Simple regex to find text between parentheses (common in PDFs)
    $textMatches = [regex]::Matches($content, '\((.*?)\)')
    
    Write-Host "Found text fragments:"
    Write-Host "====================="
    
    foreach ($match in $textMatches) {
        $text = $match.Groups[1].Value
        if ($text.Length -gt 2 -and $text -notmatch '[^\x20-\x7E]') {
            Write-Host $text
        }
    }
    
} catch {
    Write-Host "Error extracting text: $($_.Exception.Message)"
    Write-Host ""
    Write-Host "For proper PDF text extraction, consider using:"
    Write-Host "1. Adobe Acrobat Reader (copy/paste text)"
    Write-Host "2. Online PDF to text converters"
    Write-Host "3. PowerShell modules like 'PdfSharp' or 'iTextSharp'"
}
