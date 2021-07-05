(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[880],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return $},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},$=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,$=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,p=u["".concat(c,".").concat(m)]||u[m]||l[m]||i;return t?r.createElement(p,o(o({ref:n},$),{},{components:t})):r.createElement(p,o({ref:n},$))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2079:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return $},default:function(){return u}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],s={sidebar_position:3,title:"Connect4 Reaction Listener"},c=void 0,d={unversionedId:"funccs/connect4system/reactionListener",id:"funccs/connect4system/reactionListener",isDocsHomePage:!1,title:"Connect4 Reaction Listener",description:"This is the reaction listener for the Connect4 system",source:"@site/docs/funccs/connect4system/reactionListener.md",sourceDirName:"funccs/connect4system",slug:"/funccs/connect4system/reactionListener",permalink:"/funccs/connect4system/reactionListener",editUrl:"https://github.com/yagpdb-cc/yagpdb-cc/edit/master/website/docs/funccs/connect4system/reactionListener.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Connect4 Reaction Listener"},sidebar:"tutorialSidebar",previous:{title:"Connect4",permalink:"/funccs/connect4system/connect4Start"},next:{title:"Counting",permalink:"/funccs/counting"}},$=[],l={toc:$};function u(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is the reaction listener for the Connect4 system"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Trigger Type:")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Reaction")," on ",(0,i.kt)("inlineCode",{parentName:"p"},"Added Reactions Only")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'{{/*\n    This is the reaction listener for the connect4 system\n\n    Trigger Type: Reaction\n    Trigger: Added Reactions Only\n\n    Credits:\n    zen | \u30bc\u30f3 (https://github.com/z3nn13)\n*/}}\n\n{{ define "board_maker" }}\n        {{- $store := .store -}}\n        {{- $board := .board -}}\n        {{- $out := "" -}}\n        {{- range $board -}}\n                {{$rows := ""}}\n                {{- range . -}}\n                        {{- $rows = printf "%s%s " $rows (index $store.emojis .) -}}\n                {{- end -}}\n                {{- $out = print $rows "\\n" $out -}}\n        {{- end -}}\n        {{- $out = print $out "1\ufe0f\u20e3 2\ufe0f\u20e3 3\ufe0f\u20e3 4\ufe0f\u20e3 5\ufe0f\u20e3 6\ufe0f\u20e3 7\ufe0f\u20e3" -}}\n        {{- $embed := sdict "author" (sdict "name" (print .cPlayer.Username "\'s turn") "icon_url" (.cPlayer.AvatarURL "256"))\n            "title" "Connect4"\n            "description" $out\n            "color" (index $store.color .turn)\n            "fields" (cslice 1 2)\n            "footer" (sdict "text" "Powered by \u2022 Yagpdb.xyz" ) -}}\n        {{- $embed.fields.Set (sub .turn 1) (sdict "name" (print "Player " .turn) "value" (print "> " .cPlayer.Mention) "inline" true) -}}\n        {{- $embed.fields.Set (sub .nextTurn 1 ) (sdict "name" (print "Player " .nextTurn) "value" .nPlayer.Mention "inline" true ) -}}\n        {{- .Set "embed" $embed -}}\n{{- end}}\n\n{{/* Global variables */}}\n{{ $data := sdict}}{{$players := cslice}}{{$cPlayer := ""}}{{$turn := ""}}{{$nextTurn := ""}}{{$nPlayer := ""}}{{$input := ""}}{{$flag := false}}\n{{ $store := sdict\n    "emojis" (cslice "\u26ab" "\ud83d\udd34" "\ud83d\udfe1" "\ud83d\udd35")\n    "color" (cslice "unused" 0xff4d12 0xfff457)}}\n\n{{ if $db := dbGet 2021 "connect4" }}\n    {{ $data = $db.Value}}\n    {{ $players = $players.AppendSlice $data.players}}{{/* cslice ["offset",p1,p2] */}}\n    {{ $turn = $data.turn}} {{/* 1 or 2 */}}\n    {{ $cPlayer = (index $players $turn|getMember).User}}\n    {{ $nextTurn = sub 3 $turn}} {{/* switch between 1 and 2 */}}\n    {{ $nPlayer = (index $players $nextTurn|getMember).User }}\n\n    {{ if eq $data.msgID .Message.ID}}\n            {{ deleteMessageReaction nil .Message.ID .User.ID .Reaction.Emoji.APIName}}\n            {{/* quit reaction */}}\n            {{ if and (eq .Reaction.Emoji.ID 844556617085485058) (in $players .User.ID) }}\n                    {{ $otherPlayer := or (and (eq $cPlayer.ID .User.ID) $nPlayer) $cPlayer}}\n                    {{ $embed := index .Message.Embeds 0 | structToSdict}}\n                    {{ $embed.Set "author" (sdict "name" "Game Over" "icon_url" ($otherPlayer.AvatarURL "256"))}}\n                    {{ $embed.Set "color" 0xffdc42}}\n                    {{ editMessage nil .Message.ID (complexMessageEdit "content" (printf "> <a:r_leave:844556617085485058>\u2503**%s** have left the game\\n\ud83c\udf8a\u2503**Winner: %s**" .User.Username $otherPlayer.Mention) "embed" (cembed $embed))}}\n                    {{ deleteAllMessageReactions nil .Message.ID }}\n                    {{ dbDel 2021 "connect4" }}\n            {{ else }}\n                    {{ if eq $cPlayer.ID $.User.ID}}\n                            {{/* Getting integer from keycap reaction */}}\n                            {{ if and (le ($temp := index (toRune .Reaction.Emoji.Name) 0) \'7\') (gt $temp \'0\') }}\n                                    {{$input = sub $temp \'1\'}}\n                                    {{$flag = true}}\n                            {{end}}\n                    {{ end }}\n            {{ end }}\n    {{ end }}\n{{ end }}\n\n{{if $flag}}\n    {{ $tempData := sdict "board" $data.board "store" $store "input" $input "turn" $turn "nextTurn" $nextTurn "cPlayer" $cPlayer "nPlayer" $nPlayer "valid" false}}\n    {{ template "slot_checker" $tempData}}\n    {{ template "board_maker" $tempData}}\n    {{ if not $tempData.valid}}\n            {{ editMessage nil .Message.ID (complexMessageEdit\n            "content" (printf "> Slot %d\u20e3 is full.\\n%s\u2503%s, Please pick another slot" ($input|add 1) (index $store.emojis $turn) .User.Mention)\n            "embed" (cembed $tempData.embed))}}\n    {{ else }}\n        {{ template "win_checker" $tempData}}\n        {{ $msg := printf "> %s\u2503**%s** dropped token in slot %d\u20e3\\n" (index $store.emojis $turn) .User.Username ($input|add 1) }}\n        {{ if or $tempData.gameWon $tempData.gameTie}}\n                {{ $col := "" }}{{ $winner := "None"}}\n                {{ if $tempData.gameWon}}\n                        {{ $p := 0}}{{$r := .Member.Roles}}{{range .Guild.Roles}}{{if and (in $r .ID) (.Color) (lt $p .Position)}}{{$p = .Position}}{{$col = .Color}}{{end}}{{end}}\n                        {{ $col = or $col (index $store.color $turn)}}{{ $winner = .User.Mention}}\n                        {{ $msg = printf "%s\ud83c\udf8a\u2503%s made a **connect4**" $msg .User.Mention }}\n                        {{ $tempData.embed.author.Set "name" (print "Game Over \u2022 " (index $store.emojis $turn) " wins !")}}\n                {{ else if $tempData.gameTie}}\n                        {{ $col =  0xba19ff }}\n                        {{ $msg = print $msg "\ud83e\udd1d\u2503Owo what\'s this, the match is a **draw**"  }}\n                        {{ $tempData.embed.author.Set "name" "Game Over \u2022 Tied !" }}\n                {{ end }}\n\n                {{ sendMessage nil (cembed "color" 0x03fc90 "description" (printf "<:status_online:845602611872399381> **Results** \u2022 %s vs %s\\n> **Winner**\u2503%s\\n> **Time Taken**\u2503`%s`" $nPlayer.Mention .User.Mention $winner ((currentTime.Sub $data.time).Round .TimeSecond)))}}\n                {{ $tempData.embed.Set  "color" $col }}\n                {{ deleteAllMessageReactions nil .Message.ID }}\n                {{ dbDel 2021 "connect4" }}\n        {{ else }}\n                {{ $tempData.Set "turn" $nextTurn }}{{ $tempData.Set "nextTurn" $turn}} {{ $tempData.Set "cPlayer" $nPlayer}} {{ $tempData.Set "nPlayer" $cPlayer}}\n                {{ template "board_maker" $tempData}}\n                {{ $msg = printf "%s%s\u2503%s, Please pick a slot" $msg (index $store.emojis $nextTurn) $nPlayer.Mention}}\n                {{ $data.Set "turn" $nextTurn }}\n                {{ $data.Set "board" $tempData.board }}\n                {{ dbSet 2021 "connect4" $data }}\n        {{ end }}\n        {{ editMessage nil .Message.ID (complexMessageEdit "content" $msg "embed" (cembed $tempData.embed))}}\n    {{end}}\n{{end}}\n\n{{- define "slot_checker" -}}\n    {{- $board := .board }}{{ $turn := .turn }}{{ $input := .input }}{{$position := 0 -}}{{ $found := false}}\n    {{- $verti := cslice -}}\n    {{/* Fetching input slot */}}\n    {{- range $board -}}\n        {{- $verti = $verti.Append (index . $input) -}}\n    {{- end -}}\n    {{- if eq (index $verti 5) 0 3}}\n        {{.Set "valid" true}}\n        {{/* Returning the first empty spot from bottom */}}\n        {{- range $i,$v := $verti -}}\n            {{- if not $found -}}\n                {{- if eq $v 0 3}}\n                    {{- $found = true}}\n                    {{- $position = $i}}\n                {{- end }}\n            {{- else }}\n                {{- (index $board $i).Set $input 3 -}}\n            {{- end}}\n        {{- end}}\n        {{- (index $board $position).Set $input $turn -}}\n    {{- end}}\n    {{/* Cleaning blue highlights */}}\n    {{- range $rowIndex,$row := $board -}}\n        {{- range $col,$v := $row -}}\n            {{- if and (eq $col $input|not) (eq $v 3) -}}\n                {{- (index $board $rowIndex).Set $col 0 -}}\n            {{- end -}}\n        {{- end -}}\n    {{- end -}}\n    {{- .Set "board" $board -}}\n    {{- .Set "position" $position -}}\n{{- end -}}\n\n\n{{- define "win_checker" -}}\n    {{- $gameWon := false}}{{$board := .board -}}{{$turn := .turn}}{{$input := .input}}{{$position := .position -}}\n    {{/* Horizontal checking */}}\n    {{- $check  := index $board $position -}}\n    {{- range $col,$v := $check -}}\n        {{- if and (eq $v 0 3|not) (lt $col (len $check|add -3)) -}}\n            {{- if and (eq $v (add $col 1|index $check)) (eq $v (add $col 2|index $check)) (eq $v (add $col 3|index $check)) -}}\n                {{- $gameWon = true -}}\n            {{- end -}}\n        {{- end -}}\n    {{- end -}}\n    {{/* Vertical checking */}}\n    {{- $verti := cslice -}}\n    {{- range $board -}}\n        {{- $verti = $verti.Append (index . $input) -}}\n    {{- end -}}\n    {{- range $i,$v := $verti -}}\n        {{- if and (eq $v 0 3|not) (lt $i (len $verti|add -3)) -}}\n            {{- if and (eq $v (add $i 1|index $verti)) (eq $v (add $i 2|index $verti)) (eq $v (add $i 3|index $verti)) -}}\n                {{- $gameWon = true -}}\n            {{- end -}}\n        {{- end -}}\n    {{- end -}}\n\n    {{/* Diagonal checking */}}\n    {{- $marker := cslice -}}\n    {{- $total := cslice -}}\n    {{- range $rowIndex, $row := $board -}}\n        {{- range $col,$v := $row -}}\n            {{- if not (eq $v 0 3) -}}\n                {{$total = $total.Append $v -}}\n            {{- end -}}\n            {{- if eq $v $turn -}}\n                {{- $marker = $marker.Append (printf "%d%d" $rowIndex $col) -}}\n            {{- end -}}\n        {{- end -}}\n    {{- end -}}\n    {{- range $marker -}}\n        {{- if and (in $marker (.|toInt|add 11|str)) (in $marker (.|toInt|add 22|str)) (in $marker (.|toInt|add 33|str)) -}}\n            {{- $gameWon = true -}}\n        {{- else if and (in $marker (.|toInt|add 9|str)) (in $marker (.|toInt|add 18|str)) (in $marker (.|toInt|add 27|str)) -}}\n            {{- $gameWon = true -}}\n        {{- end -}}\n    {{- end -}}\n    {{- if and (not $gameWon) (eq (len $total) 42) -}}\n    {{- .Set "gameTie" true -}}\n    {{- end -}}\n    {{- .Set "gameWon" $gameWon -}}\n{{- end }}\n')))}u.isMDXComponent=!0}}]);