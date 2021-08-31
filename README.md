# paste-comma-separated

This is a Visual Studio Code extension that provides a command to paste your clipboard as a comma-separated list

Example:
```
Lorem ipsum dolor sit amet => Lorem,ipsum,dolor,sit,amet
```

Useful when copying with multi cursor

## Commands

`"paste-comma-separated.pasteCommaSeparated"`

By default, the shortcut is

Windows/Linux: `ctrl+alt+v`  
Mac: `shift+cmd+v`

You can set your own shortcut, eg:

```
{
  "key": "ctrl+shift+alt+v",
  "command": "paste-comma-separated.pasteCommaSeparated",
}
```

## Release Notes

Check [CHANGELOG.md](CHANGELOG.md) for more this
