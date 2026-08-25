# Envia as alterações para o GitHub (que dispara o deploy na Cloudflare).
#
# Uso:  .\publicar.ps1 "descrição do que mudou"
#
# O Windows PowerShell 5.1 não aceita "&&" para encadear comandos, por isso
# usamos "if ($?)" — cada passo só roda se o anterior deu certo.

param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$Mensagem
)

$ErrorActionPreference = 'Continue'

git add -A
if (-not $?) { Write-Host "Falhou no 'git add'." -ForegroundColor Red; exit 1 }

# se não houver nada mudado, o commit falha — avisamos e paramos sem erro
$pendente = git status --porcelain
if (-not $pendente) {
    Write-Host "Nada mudou desde o ultimo envio." -ForegroundColor Yellow
    exit 0
}

git commit -m $Mensagem
if (-not $?) { Write-Host "Falhou no 'git commit'." -ForegroundColor Red; exit 1 }

git push
if (-not $?) { Write-Host "Falhou no 'git push'." -ForegroundColor Red; exit 1 }

Write-Host ""
Write-Host "Enviado. A Cloudflare vai publicar em instantes." -ForegroundColor Green
